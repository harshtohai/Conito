import Link from 'next/link'

export default function NavButton({url,buttonText}:{url:any,buttonText:string}){
  return(
    <Link href={url}>
      <div>
        <button>
          {buttonText}
        </button>
      </div> 
    </Link>
  )
}
