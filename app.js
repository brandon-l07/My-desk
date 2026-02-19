const API_URL = "https://YOURPROJECT.supabase.co/rest/v1/posts?select=*";
const API_KEY = "YOUR_PUBLIC_KEY";

async function loadPosts() {
    const res = await fetch(API_URL, {
        headers: {
            "apikey": API_KEY,
            "Authorization": "Bearer " + API_KEY
        }
    });

    const posts = await res.json();

    const container = document.getElementById("posts");
    container.innerHTML = "";

    posts.reverse().forEach(post => {
        const div = document.createElement("div");
        div.className = "post";

        const date = new Date(post.created_at).toLocaleString();

        div.innerHTML = `
            <div class="post-text">${post.content}</div>
            <div class="post-date">${date}</div>
            <div class="actions">
                <a class="share" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.content)}" target="_blank">
                    Share
                </a>
            </div>
        `;

        container.appendChild(div);
    });
}

loadPosts();
