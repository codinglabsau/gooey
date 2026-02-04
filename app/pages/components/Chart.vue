<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ChartLegend, ChartTooltip } from "@/components/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  ChartCrosshair,
  ChartLegend,
  ChartTooltip,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <!-- Use with a charting library like unovis -->
  <ChartTooltip />
  <ChartLegend />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Chart Components</ComponentHeading>

    <div class="mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Chart Components</CardTitle>
        </CardHeader>

        <CardContent>
          <p class="text-muted-foreground">
            Chart components provide tooltip and legend utilities for building charts. Use with a
            charting library like unovis for full functionality.
          </p>

          <div class="mt-4 space-y-2">
            <p class="text-sm font-medium">Exports:</p>

            <ul class="list-inside list-disc text-sm text-muted-foreground">
              <li>ChartCrosshair</li>

              <li>ChartLegend</li>

              <li>ChartSingleTooltip</li>

              <li>ChartTooltip</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
