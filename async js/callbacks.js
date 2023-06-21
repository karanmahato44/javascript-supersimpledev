const posts = [
  {
    title: 'blog 1',
    content: 'blog one content.'
  }, 
  {
    title: 'blog 2',
    content: 'blog two content'
  }
];

function getPosts() {
  setTimeout(() => {
    let html = '';
    posts.forEach((post) => {
      html += `<div>${post.title}</div>`;
    });
    document.querySelector('.container').innerHTML = html;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    callback();
    posts.push(post);
  }, 2000);
}

createPost({
  title: 'blog 3',
  content: 'blog three content'
}, getPosts)