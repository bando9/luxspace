export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer class="flex text-center px-4 py-8 justify-center">
        <p class="text-sm hover:underline">
          Copyright {year}
          <span className="animate-ping text-sky-400 opacity-75">•</span> All
          Rights Reserved LuxSpace by BuildWith Angga
        </p>
      </footer>
    </div>
  );
}
