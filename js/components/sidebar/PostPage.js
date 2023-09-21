import PostList from "./PostList.js"

export default function PostPage ({ $target }) {

    const TEST_DATA = [
        {
            "id": 1,
            "title": "노션을만들자"
        },
        {

        }
    ]


    const $page = document.createElement("div")
    $page.className = 'documentDiv'
    
    new PostList({ $target })


    const $newBtn = document.createElement("button")
    $page.appendChild($newBtn)
    $newBtn.className = "addNew"
    $newBtn.textContent = "➕ Page"

    this.render = () => {
        $target.appendChild($page)
    }

    this.render()
}