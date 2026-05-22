import { Divider, Icon, Link, Typography } from "@ppl/ui";
import { ArrowNarrowRight } from "@untitledui/icons/ArrowNarrowRight";
import { LinkExternal01 } from "@untitledui/icons/LinkExternal01";

const Links = () => {
  return (
    <>
      <Typography variant="h2" color="primary" gutterBottom>
        Links
      </Typography>
      <Typography gutterBottom>
        Sémantický <code>&lt;a&gt;</code> s vizuálními variantami sdílenými s <code>Button</code>. Pro skutečnou
        navigaci (kopírování URL, otevření v novém panelu, history, screen reader). Default variant je <code>link</code>{" "}
        — inline odkaz bez paddingu, použitelný uvnitř <code>Typography</code> nebo v textu karet (font-size se dědí z
        parentu).
      </Typography>

      <Divider className="my-10" />

      {/* SECTION: Inline link (default variant) – stavy x barvy */}
      <Typography variant="h3" color="carton" gutterBottom>
        Inline link (default <code>variant=&quot;link&quot;</code>)
      </Typography>
      <Typography gutterBottom>
        Bez paddingu, bez fixní výšky, defaultně podtržený. Na hover se podtržení odebere.
      </Typography>

      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center"></div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Primary
            </Typography>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Secondary blue
            </Typography>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Primary Destructive
            </Typography>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Secondary Destructive
            </Typography>
          </div>
        </div>

        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#">Zvolit výdejní místo</Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="primaryLight">
              Zvolit výdejní místo
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructive">
              Zrušit objednávku
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructiveLight">
              Zrušit objednávku
            </Link>
          </div>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" interactionState="hover">
              Zvolit výdejní místo
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="primaryLight" interactionState="hover">
              Zvolit výdejní místo
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructive" interactionState="hover">
              Zrušit objednávku
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructiveLight" interactionState="hover">
              Zrušit objednávku
            </Link>
          </div>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" interactionState="press">
              Zvolit výdejní místo
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="primaryLight" interactionState="press">
              Zvolit výdejní místo
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructive" interactionState="press">
              Zrušit objednávku
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructiveLight" interactionState="press">
              Zrušit objednávku
            </Link>
          </div>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" interactionState="focus">
              Zvolit výdejní místo
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="primaryLight" interactionState="focus">
              Zvolit výdejní místo
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructive" interactionState="focus">
              Zrušit objednávku
            </Link>
          </div>
          <div className="flex min-w-[200px] items-center justify-center">
            <Link href="#" color="destructiveLight" interactionState="focus">
              Zrušit objednávku
            </Link>
          </div>
        </div>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Icon link */}
      <Typography variant="h3" color="carton" gutterBottom>
        Icon link
      </Typography>
      <Typography gutterBottom>
        Odkaz se šipkou — typicky pro „Více informací&ldquo;, „Pokračovat&ldquo;, „Detail&ldquo;. Realizováno přes{" "}
        <code>variant=&quot;text&quot;</code> + <code>endIcon</code>.
      </Typography>

      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center"></div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Primary
            </Typography>
          </div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Secondary blue
            </Typography>
          </div>
        </div>

        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Link href="#" variant="text" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Link href="#" variant="text" color="primaryLight" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Více informací
            </Link>
          </div>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Link href="#" variant="text" interactionState="hover" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Link
              href="#"
              variant="text"
              color="primaryLight"
              interactionState="hover"
              endIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Více informací
            </Link>
          </div>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Link href="#" variant="text" interactionState="focus" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[220px] items-center justify-center">
            <Link
              href="#"
              variant="text"
              color="primaryLight"
              interactionState="focus"
              endIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Více informací
            </Link>
          </div>
        </div>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Primary filled link – vypadá jako tlačítko, ale je to <a> */}
      <Typography variant="h3" color="carton" gutterBottom>
        Primary filled link (<code>variant=&quot;contained&quot;</code>)
      </Typography>
      <Typography gutterBottom>
        Odkaz vypadá vizuálně jako plné tlačítko, ale sémanticky je <code>&lt;a href&gt;</code> — vhodné pro hlavní CTA
        odkazy, které spouštějí navigaci (např. „Sledovat zásilku&ldquo;, „Zaregistrovat se&ldquo;).
      </Typography>

      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center"></div>
          <div className="flex min-w-[250px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Primary
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Secondary blue
            </Typography>
          </div>
        </div>

        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained">
              Sledovat zásilku
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" color="primaryLight">
              Sledovat zásilku
            </Link>
          </div>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" interactionState="hover">
              Sledovat zásilku
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" color="primaryLight" interactionState="hover">
              Sledovat zásilku
            </Link>
          </div>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" interactionState="press">
              Sledovat zásilku
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" color="primaryLight" interactionState="press">
              Sledovat zásilku
            </Link>
          </div>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" interactionState="focus">
              Sledovat zásilku
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" color="primaryLight" interactionState="focus">
              Sledovat zásilku
            </Link>
          </div>
        </div>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Primary outlined link */}
      <Typography variant="h3" color="carton" gutterBottom>
        Primary outlined link (<code>variant=&quot;outlined&quot;</code>)
      </Typography>
      <Typography gutterBottom>
        Sekundární CTA odkaz s rámečkem — méně dominantní než filled, ale s vizuální vahou tlačítka.
      </Typography>

      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center"></div>
          <div className="flex min-w-[250px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Primary
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Secondary blue
            </Typography>
          </div>
        </div>

        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined">
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" color="primaryLight">
              Více informací
            </Link>
          </div>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" interactionState="hover">
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" color="primaryLight" interactionState="hover">
              Více informací
            </Link>
          </div>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" interactionState="focus">
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" color="primaryLight" interactionState="focus">
              Více informací
            </Link>
          </div>
        </div>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Sizes – platí jen pro contained/outlined */}
      <Typography variant="h3" color="carton" gutterBottom>
        Sizes (contained / outlined)
      </Typography>
      <Typography gutterBottom>
        Pro inline <code>variant=&quot;link&quot;</code> se velikost neaplikuje (výška je <code>auto</code>, font-size
        se dědí). Sizes <code>large</code>, <code>medium</code>, <code>small</code> mají efekt pouze pro tlačítkové
        varianty.
      </Typography>

      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center"></div>
          <div className="flex min-w-[250px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Large
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Medium
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-center">
            <Typography component="strong" className="font-bold">
              Small
            </Typography>
          </div>
        </div>

        {/* Contained */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Contained
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" size="large">
              Sledovat zásilku
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" size="medium">
              Sledovat zásilku
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="contained" size="small">
              Sledovat zásilku
            </Link>
          </div>
        </div>

        {/* Outlined */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Outlined
            </Typography>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" size="large">
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" size="medium">
              Více informací
            </Link>
          </div>
          <div className="flex min-w-[250px] items-center justify-start">
            <Link href="#" variant="outlined" size="small">
              Více informací
            </Link>
          </div>
        </div>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Externí odkazy – auto rel */}
      <Typography variant="h3" color="carton" gutterBottom>
        Externí odkazy — auto <code>rel</code>
      </Typography>
      <Typography gutterBottom>
        Při <code>target=&quot;_blank&quot;</code> komponenta automaticky doplní{" "}
        <code>rel=&quot;noopener noreferrer&quot;</code> (ochrana před reverse tabnabbing). Pokud uživatel{" "}
        <code>rel</code> dodá explicitně, jeho hodnota má přednost.
      </Typography>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Typography component="strong" className="font-bold">
            Default (bez <code>target</code>): žádný <code>rel</code>
          </Typography>
          <Link href="https://www.pplgroup.eu/" variant="text" endIcon={<Icon icon={LinkExternal01} />}>
            PPL Group (otevře v aktuálním panelu)
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <Typography component="strong" className="font-bold">
            <code>target=&quot;_blank&quot;</code>: auto <code>rel=&quot;noopener noreferrer&quot;</code>
          </Typography>
          <Link href="https://www.pplgroup.eu/" target="_blank" variant="text" endIcon={<Icon icon={LinkExternal01} />}>
            PPL Group (otevře v novém panelu)
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <Typography component="strong" className="font-bold">
            Explicitní <code>rel=&quot;nofollow&quot;</code> přepíše default
          </Typography>
          <Link
            href="https://example.com"
            target="_blank"
            rel="nofollow"
            variant="text"
            endIcon={<Icon icon={LinkExternal01} />}
          >
            Sponzorovaný odkaz s rel=&quot;nofollow&quot;
          </Link>
        </div>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Use case – výběr výdejního místa */}
      <Typography variant="h3" color="carton" gutterBottom>
        Use case — výběr výdejního místa
      </Typography>
      <Typography gutterBottom>
        Inline odkaz <code>variant=&quot;link&quot;</code> v rámci karty s informacemi o doručení. Stejný layout jako u{" "}
        <code>Button variant=&quot;link&quot;</code>, ale sémanticky správně jako <code>&lt;a&gt;</code>.
      </Typography>

      <div className="flex max-w-sm flex-col items-start gap-1 rounded-2xl bg-white px-6 py-5 shadow-md">
        <Typography variant="h5" component="strong" className="font-bold">
          Doručit na výdejní místo
        </Typography>
        <Typography>PPL BOX OST Polanecká (Stračena)</Typography>
        <Link href="#vyberni-misto">Zvolit výdejní místo</Link>
        <Typography className="font-bold text-success">Zdarma</Typography>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Use case – inline link v textu */}
      <Typography variant="h3" color="carton" gutterBottom>
        Use case — inline odkaz v textu
      </Typography>
      <Typography gutterBottom>
        Default <code>variant=&quot;link&quot;</code> dědí font-size z parent <code>Typography</code> — vhodné pro
        odkazy v běžném textu.
      </Typography>

      <div className="flex max-w-2xl flex-col gap-3 rounded-2xl bg-white px-6 py-5 shadow-md">
        <Typography>
          Před odesláním zásilky se prosím seznamte s našimi{" "}
          <Link href="#obchodni-podminky">obchodními podmínkami</Link> a{" "}
          <Link href="#gdpr">zásadami zpracování osobních údajů</Link>. Pokud máte dotaz, navštivte naši{" "}
          <Link href="#napoveda">nápovědu</Link>.
        </Typography>
        <Typography variant="labelS">
          Dotaz na podporu? Napište nám na{" "}
          <Link href="mailto:info@ppl.cz" color="primary">
            info@ppl.cz
          </Link>
          .
        </Typography>
      </div>

      <Divider className="my-10" />

      {/* SECTION: Polymorphic render */}
      <Typography variant="h3" color="carton" gutterBottom>
        Polymorphic <code>render</code> prop
      </Typography>
      <Typography gutterBottom>
        Pro integraci s routing knihovnami (NextLink, React Router Link) lze přepsat výchozí <code>&lt;a&gt;</code> přes{" "}
        <code>render</code> prop. Všechny vizuální i HTML props se pak předají do custom komponenty.
      </Typography>

      <Link
        href="/dashboard"
        variant="contained"
        endIcon={<Icon icon={ArrowNarrowRight} />}
        render={({ children, ...props }) => (
          <a {...props} data-custom-router="demo">
            {children}
          </a>
        )}
      >
        Render přes custom anchor (data-custom-router=&quot;demo&quot;)
      </Link>
    </>
  );
};

export default Links;
