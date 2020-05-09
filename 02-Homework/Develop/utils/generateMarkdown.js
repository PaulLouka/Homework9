function generateMarkdown(data) {
  return `
# ${data.title}
  <div class="song">
     <p>
     <h2>${data.title}</h2>
     <p class="artist">${music.artist}</p>
     <p class="album">${music.album}</p>
     </p>
  </div>
`;
}

module.exports = generateMarkdown;
