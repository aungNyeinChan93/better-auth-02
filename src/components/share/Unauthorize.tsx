import Link from "next/link";

interface Props {
  path?: string;
}

export default function Unauthorize({ path = "" }: Props) {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600">Unauthorized</h1>
        <p className="mt-2 text-gray-600">
          You don’t have permission to access this page.
        </p>
        <Link
          href={`/${path}`}
          className="block my-4 px-4 py-2 rounded bg-slate-100 hover:bg-slate-200"
        >
          <span className=" capitalize">{path || "Home"}</span>
        </Link>
      </div>
    </main>
  );
}
