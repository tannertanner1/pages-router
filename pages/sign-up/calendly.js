import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <div className="p-4 z-0">
      <InlineWidget url={`https://calendly.com/${process.env.NEXT_PUBLIC_CALENDLY_LINK}?hide_gdpr_banner=1?hide_landing_page_details=1?hide_event_type_details=1`} />
    </div>
  );
}