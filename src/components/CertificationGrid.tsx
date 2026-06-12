import { certifications } from "../data/certifications";

export default function CertificationGrid() {
  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Certifications</h2>

      <div className="grid grid-cols-3 gap-4">
        {certifications.map((c) => (
          <div key={c.id} className="bg-slate-800 p-4 rounded">
            <img src={c.image} className="rounded" />
            <h3 className="mt-2">{c.title}</h3>
            <p className="text-sm text-gray-400">{c.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
