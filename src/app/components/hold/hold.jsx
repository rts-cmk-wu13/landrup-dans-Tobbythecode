import Image from "next/image";

export default function Hold() {
  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      
      <h2 className="text-3xl font-bold mb-12 text-center">
        Vores holdtyper
      </h2>

      <div className="space-y-20">


        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/boernedans.jpg"
            width={500}
            height={300}
            alt="Børnehold"
            className="rounded-xl object-cover"
          />
          <div className="max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Børnehold</h3>
            <p className="text-white leading-relaxed">
              På børneholdene leger vi os ind i dansens verden gennem musik,
              bevægelse og fantasi. Undervisningen styrker motorik, rytme og
              kropsbevidsthed i trygge rammer. Fokus er på danseglæde,
              fællesskab og aktiv bevægelse, hvor alle kan være med.
            </p>
          </div>
        </div>

 
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/seniordans.jpg"
            width={500}
            height={300}
            alt="Seniordans"
            className="rounded-xl object-cover"
          />
          <div className="max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Selskabs- og seniordans
            </h3>
            <p className="text-white leading-relaxed">
              Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom
              motion. Vi danser klassiske pardanse i et tempo, hvor alle kan
              følge med. Undervisningen styrker balance, koordination og
              kondition, samtidig med at fællesskabet og danseglæden er i
              centrum.
            </p>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/modernedans.jpg"
            width={500}
            height={300}
            alt="Moderne dans"
            className="rounded-xl object-cover"
          />
          <div className="max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Moderne dans og ballet
            </h3>
            <p className="text-white leading-relaxed">
              Moderne dans og ballet forener teknik, kropskontrol og musikalsk
              udtryk. Træningen forbedrer styrke, smidighed og holdning gennem
              varierede øvelser. Undervisningen foregår i en positiv atmosfære,
              hvor bevægelsesglæde og koncentration skaber både fordybelse og
              effektiv motion.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/streethiphop.jpg"
            width={500}
            height={300}
            alt="Streetdance"
            className="rounded-xl object-cover"
          />
          <div className="max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Streetdance og hiphop
            </h3>
            <p className="text-white leading-relaxed">
              Streetdance og hiphop er energifyldt træning med fokus på rytme,
              attitude og fællesskab. Vi arbejder med grooves, koreografier og
              grundtrin, der styrker kondition og koordination. Stemningen er
              uformel og motiverende, så motion og danseglæde går hånd i hånd.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}