import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SITE_TITLE } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-6">Featured Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Modern Apartment in the City"
            imageUrl="/assets/OIP.webp"
            description="A beautiful and modern apartment located in the heart of the city."
          />
          <Card
            title="Cozy Cottage Retreat"
            imageUrl="/assets/hotel img2.jpg"
            description="Enjoy peace and quiet in this cozy countryside cottage."
          />
        </div>
        <div className="mt-8">
          <Button label="Explore More" onClick={() => alert('Redirecting...')} />
        </div>
      </main>
    </>
  );
}
