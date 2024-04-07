import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const contentClasses = [
  "min-w-[200px] bg-white rounded-[8px] shadow-md p-1",
  "will-change-[opacity,transform]"
].join(" ");

const itemClasses = [
  "py-2 px-3",
  "text-sm text-secondary-500 group leading-none rounded-[4px]",
  "flex items-center justify-between relative select-none outline-none",
  "hover:bg-primary/10 hover:text-primary transition-all",
].join(" ");

const labelClasses = ["py-2 px-3 mb-1", "border-b border-secondary-200"].join(
  " "
);

export const UserMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild
        className="w-full hover:opacity-80 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Image
            src={"/images/avatar.png"}
            width={48}
            height={48}
            alt="icon"
            className="rounded-full border border-white"
          />
          <h3 className="font-[500]">Ernst Young</h3>
          <ChevronDown className="ml-auto text-secondary-500" size={14}/>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content asChild className={contentClasses}>
          <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
          >
            <DropdownMenu.Label className={labelClasses}>
              My Account
            </DropdownMenu.Label>
            <DropdownMenu.Item className={itemClasses}>Menu 1</DropdownMenu.Item>
            <DropdownMenu.Item className={itemClasses}>Menu 2</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className={itemClasses}>
                Sub menu
                <ChevronRight
                  className="ml-auto text-secondary-500 group-hover:text-primary"
                  size={14}
                />
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent asChild className={contentClasses}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.90 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownMenu.Item className={itemClasses}>
                      Sub menu 1
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={itemClasses}>
                      Sub menu 2
                    </DropdownMenu.Item>
                  </motion.div>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Separator />
            <DropdownMenu.Item className={itemClasses}>Menu 3</DropdownMenu.Item>
            <DropdownMenu.Arrow className="fill-white" />
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
