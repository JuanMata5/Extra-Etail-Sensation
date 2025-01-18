import { MdLocalShipping } from "react-icons/md"

export const FeatureGrid = () => {
  return (
    <div className="pt-[50px] m-4 grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
        <div className="flex items-center gap-6">
          <MdLocalShipping size={40} className="text-slate-400" />

          <div className="space-y-1">
              <p className="font-semibold">
                Soporte 24/7
              </p>
              <p className="text-sm">
                   Soporte tecnico en cualquier momento
              </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <MdLocalShipping size={40} className="text-slate-400" />

          <div className="space-y-1">
              <p className="font-semibold">
                Envio Gratis
              </p>
              <p className="text-sm">
                  En todos nuestros productos
              </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <MdLocalShipping size={40} className="text-slate-400" />

          <div className="space-y-1">
              <p className="font-semibold">
                 Devoluciones
              </p>
              <p className="text-sm">
                  Devuelve el equipo si no te satisface la compra dentro de las 72hs
              </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <MdLocalShipping size={40} className="text-slate-400" />

          <div className="space-y-1">
              <p className="font-semibold">
                Garantia
              </p>
              <p className="text-sm">
                  Garantia de un año en todos nuestros productos
              </p>
          </div>
        </div>
    </div>
  )
}
