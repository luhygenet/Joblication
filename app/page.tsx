import Link from "next/link";
import ProductCard from "./components/ProductCard";
import JobListing from "./components/jobListing";
import JobListingCard from "./components/jobListing";

export default function Home() {
  return (
    <div>
      <main className="px-20">
        <JobListingCard />
      </main>
    </div>
  );
}
