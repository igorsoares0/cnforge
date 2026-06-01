import Link from "next/link";

import { verifyEmail } from "@/app/actions/auth";
import { ResendVerification } from "@/components/auth/resend-verification";

export default async function VerifyEmailPage({
  searchParams,
}: PageProps<"/verify-email">) {
  const { token } = await searchParams;
  const value = Array.isArray(token) ? token[0] : token;

  if (!value) {
    return (
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Verify your email</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Didn&apos;t get the email? Enter your address to resend the link.
          </p>
        </div>
        <ResendVerification />
      </div>
    );
  }

  const result = await verifyEmail(value);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        {result.success ? "Email verified" : "Verification failed"}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {result.success ?? result.error}
      </p>
      <Link
        href={result.success ? "/login" : "/verify-email"}
        className="mt-6 inline-block text-sm font-medium text-foreground hover:underline"
      >
        {result.success ? "Go to sign in" : "Request a new link"}
      </Link>
    </div>
  );
}
