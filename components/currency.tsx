import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const currency = () => {
  return (
    <Select>
      <SelectTrigger className="w-[80px] outline-none ring-0 focus:outline-none focus:ring-0 pl-3">
        <SelectValue placeholder="$" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="dollar" className="">
          $
        </SelectItem>
        <SelectItem value="euros">€</SelectItem>
        <SelectItem value="pounds">£</SelectItem>
        <SelectItem value="CHF">CHF</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default currency;
