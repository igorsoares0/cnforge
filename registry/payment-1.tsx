import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type OrderItem = {
  name: string;
  price: string;
};

type Payment1Props = {
  eyebrow?: string;
  title?: string;
  formAction?: string;
  items?: OrderItem[];
  subtotal?: string;
  tax?: string;
  total?: string;
  submitLabel?: string;
};

const DEFAULT_ITEMS: OrderItem[] = [
  { name: "Pro Plan — Annual", price: "$290.00" },
  { name: "Priority Support Add-on", price: "$49.00" },
];

export default function Payment1({
  eyebrow = "Checkout",
  title = "Complete your purchase",
  formAction = "#",
  items = DEFAULT_ITEMS,
  subtotal = "$339.00",
  tax = "$27.12",
  total = "$366.12",
  submitLabel = "Pay now",
}: Payment1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
        >
          <span className="size-1.5 rounded-full bg-success" />
          {eyebrow}
        </Badge>
        <h2
          className="mt-4 text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          <form
            action={formAction}
            method="POST"
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3
                className="text-base text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Card details
              </h3>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Card number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    autoComplete="cc-number"
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      autoComplete="cc-exp"
                      className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      autoComplete="cc-csc"
                      className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3
                className="text-base text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Billing address
              </h3>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main St"
                    autoComplete="street-address"
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="San Francisco"
                      autoComplete="address-level2"
                      className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">
                      ZIP
                    </label>
                    <input
                      type="text"
                      placeholder="94102"
                      autoComplete="postal-code"
                      className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-12 w-full rounded-xl bg-primary text-sm text-primary-foreground hover:opacity-90 lg:hidden"
            >
              {submitLabel} — {total}
            </Button>
          </form>

          <div className="order-first lg:order-last">
            <div className="rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-24">
              <h3
                className="text-base text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Order summary
              </h3>
              <div className="mt-5 flex flex-col divide-y divide-border">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-3 first:pt-0"
                  >
                    <span className="text-sm text-foreground">
                      {item.name}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Tax</span>
                  <span>{tax}</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-border pt-3">
                  <span
                    className="text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    Total
                  </span>
                  <span
                    className="text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {total}
                  </span>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-6 hidden h-12 w-full rounded-xl bg-primary text-sm text-primary-foreground hover:opacity-90 lg:flex"
              >
                {submitLabel}
              </Button>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Secure checkout · 256-bit encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
