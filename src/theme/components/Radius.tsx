import { Grid } from "@ppl/ui";

const Radius = () => {
  return (
    <Grid container columns={8}>
      <Grid>
        <div className="flex size-20 flex-col items-center justify-center rounded-xs border">
          <strong className="font-bold">XS</strong>
          <span>4px</span>
        </div>
      </Grid>
      <Grid>
        <div className="flex size-20 flex-col items-center justify-center rounded-sm border">
          <strong className="font-bold">S</strong>
          <span>8px</span>
        </div>
      </Grid>
      <Grid>
        <div className="flex size-20 flex-col items-center justify-center rounded-md border">
          <strong className="font-bold">M</strong>
          <span>12px</span>
        </div>
      </Grid>
      <Grid>
        <div className="flex size-20 flex-col items-center justify-center rounded-lg border">
          <strong className="font-bold">L</strong>
          <span>16px</span>
        </div>
      </Grid>
      <Grid>
        <div className="flex size-20 flex-col items-center justify-center rounded-xl border">
          <strong className="font-bold">XL</strong>
          <span>20px</span>
        </div>
      </Grid>
      <Grid>
        <div className="flex size-20 flex-col items-center justify-center rounded-full border">
          <strong className="font-bold">radial</strong>
          <span>50%</span>
        </div>
      </Grid>
    </Grid>
  );
};

export default Radius;
