import InstagramFeed from 'react-instagram-feed';

export const metadata = {
  title: 'Upscale Mobile Bartending | Gallery',
  description: 'Explore our Instagram feed showcasing our latest events and cocktails.',
};

export default function Gallery() {
  return (
    <section>
      <h1>Gallery</h1>
      <InstagramFeed token="[YOUR_INSTAGRAM_ACCESS_TOKEN]" counter="12" />
    </section>
  );
}
