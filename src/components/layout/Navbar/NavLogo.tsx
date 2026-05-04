export function NavLogo() {
  return (
    <a href="#" className="flex items-center gap-2">
        <span aria-hidden className="text-accent">
          <img src={`${import.meta.env.BASE_URL}assets/icons/logo.png`} alt="" className="h-20 w-20" />
        </span>
      <span className="text-xl font-bold text-white">SpigaZero</span>
    </a>
  )
}
