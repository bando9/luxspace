export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="flex text-center px-4 py-8 justify-center">
      <p className="text-sm hover:underline">
        Learning project based on BuildWith Angga (2021). Fully migrated and
        updated by Bando Mega to latest stack {year}.
        <br />
        All rights reserved © LuxSpace by BuildWith Angga.
      </p>
    </footer>
  );
}
