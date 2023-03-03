import { markdownify } from "@lib/utils/textConverter";

const NotFound = ({ data }) => {
  const { frontmatter, content } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h3 className="mb-4">{frontmatter.title}</h3>
            <p>Halaman Tidak Ditemukan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
