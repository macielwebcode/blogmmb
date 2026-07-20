import Container from "@/components/Container";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import PostCoverImage from "@/components/PostCoverImage";
import PostHeading from "@/components/PostHeading";
import PostsList from "@/components/PostsList";
import { Suspense } from "react";

export default function HomePage(){
  return (
      <Container>
        <Header />
        
        <Suspense fallback={<Loader />}>
          <PostsList />
        </Suspense>
        <PostCoverImage src='' href="" />
        <PostHeading as='h1' url="#">
          sgdfgfdgdfg
        </PostHeading>
      </Container>
  )
}