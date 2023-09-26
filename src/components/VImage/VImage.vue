<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';
import useResize from '../../helpers/useResize';

interface Props {
	src?: string;
	srcset?: Record<string, string>;
	alt?: string;
	lazy?: boolean;
	aspectRatio?: string;
	trackResize?: boolean;
}

const { src, srcset, alt, lazy, aspectRatio, trackResize } = defineProps<Props>();

const imageSize = defineModel<string>();
const el = ref<HTMLImageElement | null>(null);
const placeholder = '/etc.clientlibs/ctv-ecommerce/clientlibs/clientlib-site/resources/placeholder.png';

const { trackResizes, size, breakpoint } = useResize();

const _src = computed(() => {
	return src || placeholder;
});

const _classes = computed(() => {
	return ['responsive-image', aspectRatio ? `responsive-image--${aspectRatio}` : ''];
});

const _srcset = computed(() => {
	if (!size || !srcset) {
		return null;
	}
	return [...Object.entries(srcset).map(e => `${e[1]} ${e[0]}w`)].join(', ');
});

onMounted(() => {
	if (el.value === null) {
		console.error('Unable to find the image HTML node.');
		return;
	}
	trackResizes(el.value, trackResize);
});

watch(breakpoint, value => {
	imageSize.value = value;
});
</script>

<template>
	<img
		v-if="lazy"
		ref="el"
		:alt="alt"
		:class="[..._classes, 'lazyload', `responsive-image--${breakpoint}`]"
		data-sizes="auto"
		:data-src="_src"
		:data-srcset="_srcset"
		:src="placeholder" />
	<img
		v-else
		ref="el"
		:alt="alt"
		:class="[..._classes, `responsive-image--${breakpoint}`]"
		:sizes="size + 'px'"
		:src="_src"
		:srcset="_srcset as string" />
</template>

<style lang="scss" scoped>
.responsive-image {
	position: relative;
	width: 100%;
	object-fit: cover;

	&--1x1 {
		aspect-ratio: 1 / 1;
	}

	&--16x9 {
		aspect-ratio: 16 / 9;
	}

	&--4x3 {
		aspect-ratio: 4 / 3;
	}
}
</style>
