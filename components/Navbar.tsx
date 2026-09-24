export default function Navbar() {
  return (
    <nav className={'w-full font-open-sans py-6 flex items-center justify-between px-10 bg-transparent'}>
      <div className={'text-white text-xl'}>Charles <br/> LOKONON</div>
      <div className={'flex gap-8'}>
        <a href="#">
          About
        </a>
        <a href="#">
          Projects   
        </a>
        <a href="#">
          Articles
        </a>
        <a href="#">
          Contacts   
        </a>
      </div>
      <div>
         <button>
            FR
        </button><br/>
        <button>
            EN
        </button>
      </div>
    </nav>
  );
}