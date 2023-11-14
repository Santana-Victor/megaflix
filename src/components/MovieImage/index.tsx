import styles from "./styles.module.css";

type MovieImageProps = {
  imageUrl: string;
  alt: string;
};

export default function MovieImage({ imageUrl, alt }: MovieImageProps) {
  return <img src={imageUrl} alt={alt} className={styles.movie_image} />;
}
