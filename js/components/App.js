import Editor from "./Editor";
import PostPage from "./PostPage";

export default function App({ $target }) {
    new PostPage({ $target })

    new Editor({ $target })
}