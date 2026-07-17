import type { ErrorVariant } from "@/heroes/api/api-error";
import { ErrorState } from "./ErrorStates"

interface Props {
    error: ErrorVariant;
    onRetry?: () => void | Promise<unknown>;
}

export  const CompactErrorPage = ({ error, onRetry } : Props) => {
  

  return (
    <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
            Compact inline variant
        </h2>
        <ErrorState
            variant={error}
            compact
            onRetry={onRetry}
        />
    </section>
  )
}
