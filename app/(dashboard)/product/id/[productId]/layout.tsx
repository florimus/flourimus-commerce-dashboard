export const metadata = {
  title: 'Flourimus Ecom Admin',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children,
  stockprice
}: {
  children: React.ReactNode;
  stockprice: React.ReactNode;
}) {
  return (
    <>
      {children}
      {stockprice}
    </>
  );
}
