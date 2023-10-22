import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const apiResponse = await fetch("/api/whatever");

  const data = await apiResponse.json();
};

export default Page;
