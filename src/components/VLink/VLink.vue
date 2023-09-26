<script setup lang="ts">
import { computed } from 'vue';
import { getAbsoluteUrl } from '../../helpers/url';

interface Props {
	external?: boolean | null;
	title?: string;
	target?: '_blank' | '_self';
	href?: string;
}

const { target = '_self', external = false, href, title } = defineProps<Props>();

defineSlots<{
	default(props: Record<string, unknown>): string;
}>();

const _target = computed(() => (target === '_blank' || external ? '_blank' : '_self'));
const _rel = computed(() => (_target.value === '_blank' ? 'noopener' : undefined));
</script>

<template>
	<a
		:href="getAbsoluteUrl(href || '')"
		:rel="_rel"
		:target="_target"
		:title="title">
		<slot />
		<span
			v-if="_target === '_blank'"
			class="screen-reader-only">
			({{ $t('open-new-tab') }})
		</span>
	</a>
</template>
