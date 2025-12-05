import { Divider, Logo, Typography } from "@ppl/ui";

/**
 * Logos - PPL Logo Variants Preview
 *
 * Komponenta pro ukázku PPL loga ve všech variantách.
 */

export function Logos() {
  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Logo Variants
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-6">
        PPL logo je dostupné ve 4 variantách pro různé případy použití.
      </Typography>

      <div className="grid grid-cols-2 gap-8">
        {/* Default */}
        <div className="flex flex-col gap-4">
          <Typography variant="h5" color="text">
            Default
          </Typography>
          <div className="border-headline-10 flex items-center justify-center rounded-lg border bg-white p-8">
            <Logo variant="default" />
          </div>
          <Typography variant="labelS" className="text-text-60">
            Základní varianta pro světlé pozadí
          </Typography>
        </div>

        {/* Inverse */}
        <div className="flex flex-col gap-4">
          <Typography variant="h5" color="text">
            Inverse
          </Typography>
          <div className="flex items-center justify-center rounded-lg bg-primary p-8">
            <Logo variant="inverse" />
          </div>
          <Typography variant="labelS" className="text-text-60">
            Inverzní varianta pro tmavé pozadí
          </Typography>
        </div>

        {/* Pictogram */}
        <div className="flex flex-col gap-4">
          <Typography variant="h5" color="text">
            Pictogram
          </Typography>
          <div className="border-headline-10 flex items-center justify-center rounded-lg border bg-white p-8">
            <Logo variant="pictogram" />
          </div>
          <Typography variant="labelS" className="text-text-60">
            Piktogram pro omezený prostor
          </Typography>
        </div>

        {/* Pictogram Inverse */}
        <div className="flex flex-col gap-4">
          <Typography variant="h5" color="text">
            Pictogram Inverse
          </Typography>
          <div className="flex items-center justify-center rounded-lg bg-primary p-8">
            <Logo variant="pictogramInverse" />
          </div>
          <Typography variant="labelS" className="text-text-60">
            Inverzní piktogram pro tmavé pozadí
          </Typography>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Custom Sizes
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-6">
        Logo lze přizpůsobit pomocí vlastních rozměrů.
      </Typography>

      <div className="border-headline-10 flex flex-wrap items-end gap-8 rounded-lg border bg-white p-8">
        <div className="flex flex-col items-center gap-2">
          <Logo width={80} />
          <Typography variant="labelS" className="text-text-60">
            80px
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Logo width={120} />
          <Typography variant="labelS" className="text-text-60">
            120px
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Logo width={180} />
          <Typography variant="labelS" className="text-text-60">
            180px
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Logo width={250} />
          <Typography variant="labelS" className="text-text-60">
            250px
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Logos;
