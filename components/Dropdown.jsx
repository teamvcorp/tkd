import React from "react";
import Link from "next/link";
import "./dropDown.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
// import "./dropDownstyles.css";

const Dropdown = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="iconButton" aria-label="Customise options">
          Programs
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <Link href="/program/afterschool">
            <DropdownMenu.Item className="DropdownMenuItem">
              Afterschool
              <div className="RightSlot">⌘+A</div>
            </DropdownMenu.Item>
          </Link>
          <Link href="/program/yotae ">
            <DropdownMenu.Item className="DropdownMenuItem">
              Yotae
              <div className="RightSlot">⌘+Y</div>
            </DropdownMenu.Item>
          </Link>{" "}
          <Link href="/program">
            <DropdownMenu.Item className="DropdownMenuItem">
              Taekwondo
              <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
          </Link>
          <Link href="/program/behavior">
            <DropdownMenu.Item className="DropdownMenuItem">
              Behavior
              <div className="RightSlot">⌘+B</div>
            </DropdownMenu.Item>
          </Link>
          {/* <DropdownMenu.Separator className="DropdownMenuSeparator" /> */}
          <Link href="/program/camps">
            <DropdownMenu.Item className="DropdownMenuItem">
              Camps / Clinic
              <div className="RightSlot">⌘+C</div>
            </DropdownMenu.Item>
          </Link>
          <Link href="/program/trip">
            <DropdownMenu.Item className="DropdownMenuItem">
              Trip Outreach
              <div className="RightSlot">⌘+O</div>
            </DropdownMenu.Item>
          </Link>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
