import { shipengine } from "@/lib/helper/shipEngine";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { shipToAddress, packages } = await req.json();
  try {
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "John Doe",
          phone: "+1 555 123 4567",
          addressLine1: "742 Evergreen Terrace",
          addressLine2: "Apt 101",
          cityLocality: "Springfield",
          stateProvince: "IL",
          postalCode: "62701",
          countryCode: "US",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "se-1597925",
          process.env.SHIPENGINE_SECOND_COURIER || "se-1597926",
          process.env.SHIPENGINE_THIRD_COURIER || "se-1597927",
          process.env.SHIPENGINE_FOURTH_COURIER || "se-1633391",
        ].filter(Boolean),
      },
    });

    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}