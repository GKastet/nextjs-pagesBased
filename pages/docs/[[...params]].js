import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query; //to avoid mistakes with render

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return <h1>Docs Home page</h1>;
}

export default Doc;

//Attention!!! double [[...params]] in the name of file! This is made for getting basic page "docs"

//http://localhost:3000/docs/feature1
//http://localhost:3000/docs/feature1/concept1
//http://localhost:3000/docs/feature1/concept1/example1
