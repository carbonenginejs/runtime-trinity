// Source: E:\carbonengine\blueexposure\include\IList.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerFloatVariable.h

export const BELIST_INSERTED = 0x08;
export const BELIST_REMOVED = 0x09;
export const BELIST_EVENTMASK = 0x0f;
export const TR2_DIRTY_ALL = (1n << 64n) - 1n;

export function GetControllerActualTimeSeconds()
{
  return GetClockSeconds();
}

export function GetControllerFrameTimeSeconds()
{
  return GetClockSeconds();
}

export function GetControllerTimeSeconds()
{
  return GetControllerFrameTimeSeconds();
}

function GetClockSeconds()
{
  if (typeof performance !== "undefined")
  {
    return performance.now() / 1000;
  }
  return Date.now() / 1000;
}

export function ToDirtyMask(value)
{
  return typeof value === "bigint" ? value : BigInt(value);
}
