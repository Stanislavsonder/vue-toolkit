import { onBeforeUnmount, ref, watch } from 'vue';
import debounce from './debounce';

const _points = ref<string[]>(['xs', 'sm', 'md', 'lg']);

export default function useResize(breakpoints?: number[], points?: string[]) {
    const element = ref<Element | undefined>();
    const size = ref<number>(0);
    const breakpoint = ref<string>('xs');

    const _breakpoints = ref<number[]>([231, 281, 487]);
    if (breakpoints) {
        _breakpoints.value = breakpoints;
    }
    if (points) {
        _points.value = points;
    }
    if (points && breakpoints && points.length !== breakpoints.length) {
        console.error('Resizable error. Breakpoints should have same length.');
    }

    const observer = new ResizeObserver(
        debounce((entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                if (entry.contentBoxSize) {
                    size.value = entry.contentBoxSize[0].inlineSize;
                    return;
                }
                size.value = entry.contentRect.width;
            }
        }, 200)
    );

    const trackResizes = (el: HTMLImageElement, once: boolean) => {
        size.value = el.width || 0;
        element.value = el;
        if (once) {
            observer.observe(el);

            onBeforeUnmount(() => {
                observer.unobserve(el);
            });
        }
    };

    watch(size, width => {
        breakpoint.value = _points.value.at(_breakpoints.value.findIndex(value => width < value)) || 'xs';
    });

    return {
        trackResizes,
        size,
        breakpoint
    };
};
