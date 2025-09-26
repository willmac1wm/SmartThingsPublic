export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>
        © <span>{currentYear}</span> William E. Macomber • Cape May Courthouse, NJ •{" "}
        <a href="tel:+16096024314">+1 (609) 602-4314</a> •{" "}
        <a href="mailto:WillMac1.WM@gmail.com">WillMac1.WM@gmail.com</a>
      </p>
    </footer>
  )
}
