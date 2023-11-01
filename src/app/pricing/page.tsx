import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UpgradeButton from "@/components/UpgradeButton";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS } from "@/config/stripe";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";
import { features } from "process";

const page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  const pricingItems = [
    {
      plan: "Free",
      tagline: "작은 규모의 프로젝트에 적합합니다.",
      quota: 10,
      features: [
        {
          text: "최대 5페이지 PDF 업로드",
          footnote: "5페이지 이하의 PDF만 업로드 가능",
        },
        {
          text: "가벼운 용량의 PDF 업로드",
          footnote: "최대 4MB의 PDF 업로드 가능",
        },
        {
          text: "모바일 반응형 UI 지원",
        },
        {
          text: "양질의 데이터 호출",
          footnote: "높은 품질의 AI 답변",
          negative: true,
        },
        {
          text: "데이터 보안 활성화",
          negative: true,
        },
      ],
    },
    {
      plan: "Pro",
      tagline: "대규모 프로젝트에 적합합니다.",
      quota: PLANS.find((p) => p.slug === "pro")!.quota,
      features: [
        {
          text: "최대 25페이지 PDF 업로드",
          footnote: "25페이지까지 PDF 업로드 가능",
        },
        {
          text: "대용량의 PDF 업로드",
          footnote: "최대 16MB의 PDF 업로드 가능",
        },
        {
          text: "모바일 반응형 UI 지원",
        },
        {
          text: "양질의 데이터 호출",
          footnote: "높은 품질의 AI 답변",
        },
        {
          text: "데이터 보안 활성화",
        },
      ],
    },
  ];

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-6xl font-bold sm:text-7xl">요금제</h1>
          <p className="mt-5 text-gray-600 sm:text-lg break-keep">
            ChobsPDF 서비스가 맘에 드신다면 요금제를 업그레이드하여 더욱
            편리하게 이용해보세요
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, quota, features }) => {
              const price =
                PLANS.find((p) => p.slug === plan.toLowerCase())?.price
                  .amount || 0;

              return (
                <div
                  key={plan}
                  className={cn("relative rounded-2xl bg-white shadow-lg", {
                    "border-2 border-blue-600 shadow-blue-200": plan === "Pro",
                    "border border-gray-200": plan !== "Pro",
                  })}
                >
                  {plan === "Pro" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                      PRO
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-bold">
                      {plan}
                    </h3>
                    <p className="text-gray-500">{tagline}</p>
                    <p className="my-5 font-display text-6xl font-semibold">
                      ${price}
                    </p>
                    <p className="text-gray-500">30일 기준</p>
                  </div>

                  <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-1">
                      <p>{quota.toLocaleString()}번의 PDF 업로드 기능</p>

                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-4 w-4 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-2">
                          1달마다 업로드 가능한 PDF
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-10 space-y-5 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-blue-500" />
                          )}
                        </div>
                        {footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-gray-400", {
                                "text-gray-600": negative,
                              })}
                            >
                              {text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-gray-400", {
                              "text-gray-600": negative,
                            })}
                          >
                            {text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200" />
                  <div className="p-5">
                    {plan === "Free" ? (
                      <Link
                        href={user ? "/dashboard" : "/sign-in"}
                        className={buttonVariants({
                          className: "w-full",
                          variant: "secondary",
                        })}
                      ></Link>
                    ) : user ? (
                      <UpgradeButton />
                    ) : (
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        {user ? "지금 업그레이드" : "회원가입"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
