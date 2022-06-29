import LogoImg from '../assets/logo.svg';

export function Header() {
  return (
    <header className="bg-zinc-800 h-24 py-5 flex justify-center">
      <img src={LogoImg} alt="Logo do Instituto AmiGU" />
    </header>
  )
}