import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { trpc } from "../_trpc/client";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        // user is synced to db
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in");
      }
    },
    retry: true,
    retryDelay: 500,
  });
};

export default Page;
