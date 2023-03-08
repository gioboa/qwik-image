import { component$ } from '@builder.io/qwik';
import { Image } from '~/components/image/image';
import { providers, selectedProvider } from '~/providers';

export default component$(() => {
	return (
		<>
			Selected Provider<h1>{selectedProvider}</h1>
			<Image
				width={400}
				height={400}
				style={{ border: '2px solid red' }}
				placeholder='#e6e6e6'
				layout='constrained'
				src={providers[selectedProvider].src}
			/>
		</>
	);
});
