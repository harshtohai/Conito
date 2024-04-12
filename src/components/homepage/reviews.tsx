import Review from "./review";

export default function Reviews() {
  return(
    <div className="bg-pribg rounded-[6px] my-[3px] h-[7rem] w-full flex flex-row items-center justify-around ">
            <Review
              image="https://pbs.twimg.com/profile_images/1777416386949881856/zKYJ7Kk-_400x400.jpg"
              name="Vercel"
              review="You gonna deploy this on my platform?"
            />
            <Review
              image="https://pbs.twimg.com/profile_images/1777416386949881856/zKYJ7Kk-_400x400.jpg"
              name="Vercel"
              review="You gonna deploy this on my platform?"
            />
            <Review
              image="https://pbs.twimg.com/profile_images/1777416386949881856/zKYJ7Kk-_400x400.jpg"
              name="Vercel"
              review="You gonna deploy this on my platform?"
            />
    </div>
  )
}
