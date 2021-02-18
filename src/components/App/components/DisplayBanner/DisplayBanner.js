export const DisplayBanner = ({ nominees }) => {
  if (nominees.length >= 5) {
    return (
      <div class="banner">
        <div class="banner-content">
          <h1>Movie nomination complete!</h1>
        </div>
      </div>
    );
  }
  return <div class="empty"></div>;
};
