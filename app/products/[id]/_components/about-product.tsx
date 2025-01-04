interface AboutProductProps {
  description: string;
}

const AboutProduct = ({ description }: AboutProductProps) => {
  return (
    <div>
      <h3 className="font-semibold">Sobre</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default AboutProduct;
