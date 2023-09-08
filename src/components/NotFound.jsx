import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.log(error);

  return (
    <div style={{color:'white', textAlign: "center", marginTop: "2.5rem" }}>
      <h1>واااااای نه 🙃</h1>
      <p style={{margin:'2.5rem'}}>صفحه ای که دنبالش هستی رو نمیتونم پیداش کنم ,مطمینی درست اومدی ؟ 🤭</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
