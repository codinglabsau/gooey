<script setup lang="ts">
import { ChartLegend, ChartTooltip } from "@/components/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
</script>

<template>
  <div class="space-y-4">
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
</template>
