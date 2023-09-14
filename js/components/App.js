import Editor from "./Editor.js";
import PostPage from "./PostPage.js";

export default function App({ $target }) {
    new PostPage({ $target })

    new Editor({ $target })
}