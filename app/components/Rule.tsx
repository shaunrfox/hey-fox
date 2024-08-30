interface RuleProps {
  thickness?: number;
}

export default function Rule({ thickness = 1 }: RuleProps) {
  return <div className="rule" style={{ height: `${thickness}px` }} />;
}
