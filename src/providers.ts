import type { ImageTransformerProps } from './components/image/image';

export const selectedProvider: keyof typeof providers = 'vendure';

export const providers: Record<
	string,
	{
		src: string;
		transformer: ({ src, width, height }: ImageTransformerProps) => string;
	}
> = {
	'builder.io': {
		src: 'image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F869bfbaec9c64415ae68235d9b7b1425',
		transformer: ({ src, width, height }) => {
			return `https://cdn.builder.io/api/v1/${src}?height=${height}&width=${width}}&format=webp&fit=fill`;
		},
	},
	vendure: {
		src: 'assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg',
		transformer: ({ src, width, height }) => {
			return `https://readonlydemo.vendure.io/${src}?w=${width}&h=${height}&format=webp`;
		},
	},
};
