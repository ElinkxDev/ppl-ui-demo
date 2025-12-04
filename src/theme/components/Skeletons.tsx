import { Divider, Grid, Skeleton, Typography } from "@ppl/ui";

const Skeletons = () => {
  return (
    <Grid container>
      {/* Výchozí vzhled */}
      <Grid size={12}>
        <div className="bg-headline-5 mb-10 flex flex-col items-center justify-center p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <Skeleton width={210} />
        </div>
      </Grid>

      {/* SECTION: Text Variants */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Text Skeleton
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Základní text skeleton s různými šířkami.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-col gap-2">
          <Skeleton />
          <Skeleton width={210} />
          <Skeleton width="60%" />
          <Skeleton width="80%" />
          <Skeleton width="40%" />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Variant Types */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Varianty
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Skeleton podporuje různé varianty: text, circular, rectangular a rounded.
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Text
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Circular
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Rectangular
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Rounded
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12} className="mt-4">
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={3}>
            <Skeleton variant="text" width={100} />
          </Grid>
          <Grid size={3}>
            <Skeleton variant="circular" width={40} height={40} />
          </Grid>
          <Grid size={3}>
            <Skeleton variant="rectangular" width={100} height={60} />
          </Grid>
          <Grid size={3}>
            <Skeleton variant="rounded" width={100} height={60} />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Animations */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Animace
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Skeleton podporuje různé typy animací: pulse (výchozí), wave a bez animace.
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={4}>
            <Typography component="strong" className="block text-center font-bold">
              Pulse (výchozí)
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography component="strong" className="block text-center font-bold">
              Wave
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography component="strong" className="block text-center font-bold">
              Bez animace
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12} className="mt-4">
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={4}>
            <Skeleton animation="pulse" width={150} />
          </Grid>
          <Grid size={4}>
            <Skeleton animation="wave" width={150} />
          </Grid>
          <Grid size={4}>
            <Skeleton animation={false} width={150} />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Avatar Examples */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Avatar Skeleton
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Circular varianta je ideální pro avatar placeholdery.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-4">
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={56} height={56} />
          <Skeleton variant="circular" width={72} height={72} />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Card Example */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Příklad: Skeleton karty
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Kombinace různých skeleton variant pro zobrazení loading stavu karty.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex gap-8">
          <div className="w-64 rounded-lg border border-gray-200 p-4">
            <Skeleton variant="rectangular" height={140} className="mb-4" />
            <Skeleton variant="text" width="80%" className="mb-2" />
            <Skeleton variant="text" width="60%" />
          </div>
          <div className="w-64 rounded-lg border border-gray-200 p-4">
            <Skeleton variant="rounded" height={140} className="mb-4" />
            <Skeleton variant="text" width="80%" className="mb-2" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: List Example */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Příklad: Skeleton seznamu
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Loading stav pro seznam položek s avatarem.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex max-w-md flex-col gap-4">
          {[1, 2, 3].map(item => (
            <div key={item} className="flex items-center gap-4">
              <Skeleton variant="circular" width={48} height={48} />
              <div className="flex-1">
                <Skeleton variant="text" width="60%" className="mb-1" />
                <Skeleton variant="text" width="40%" />
              </div>
            </div>
          ))}
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Infer from Children */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Odvození rozměrů z children
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Skeleton může automaticky odvodit rozměry z children elementu.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex items-center gap-8">
          <div>
            <Typography variant="body" className="mb-2 text-sm text-gray-500">
              S children (skryté)
            </Typography>
            <Skeleton>
              <Typography variant="h2">Hello World</Typography>
            </Skeleton>
          </div>
          <div>
            <Typography variant="body" className="mb-2 text-sm text-gray-500">
              Originální element
            </Typography>
            <Typography variant="h2">Hello World</Typography>
          </div>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Custom Sizes */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Vlastní rozměry
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Skeleton podporuje číselné hodnoty (px) i řetězce (%, rem, em, atd.).
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Typography variant="body" className="w-32 text-sm text-gray-500">
              width: 200
            </Typography>
            <Skeleton width={200} />
          </div>
          <div className="flex items-center gap-4">
            <Typography variant="body" className="w-32 text-sm text-gray-500">
              width: &quot;50%&quot;
            </Typography>
            <Skeleton width="50%" />
          </div>
          <div className="flex items-center gap-4">
            <Typography variant="body" className="w-32 text-sm text-gray-500">
              width: &quot;10rem&quot;
            </Typography>
            <Skeleton width="10rem" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Skeletons;
