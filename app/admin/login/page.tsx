"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e8ecf0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "520px" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            border: "1px solid #e2e8f0",
            padding: "48px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "900",
                color: "#0f172a",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              Creative Catalyst
            </h1>
            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                color: "#94a3b8",
                fontWeight: "500",
              }}
            >
              Admin Login
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Login ID */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#334155",
                }}
              >
                Login ID
              </label>
              <div style={{ position: "relative" }}>
                <User
                  size={20}
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                    pointerEvents: "none",
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Login ID"
                  required
                  style={{
                    width: "100%",
                    height: "58px",
                    borderRadius: "12px",
                    border: "1.5px solid #cbd5e1",
                    backgroundColor: "#ffffff",
                    paddingLeft: "52px",
                    paddingRight: "16px",
                    fontSize: "16px",
                    color: "#0f172a",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#cbd5e1";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#334155",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock
                  size={20}
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                    pointerEvents: "none",
                  }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  style={{
                    width: "100%",
                    height: "58px",
                    borderRadius: "12px",
                    border: "1.5px solid #cbd5e1",
                    backgroundColor: "#ffffff",
                    paddingLeft: "52px",
                    paddingRight: "56px",
                    fontSize: "16px",
                    color: "#0f172a",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#cbd5e1";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#94a3b8",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "15px",
                  color: "#475569",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  style={{
                    width: "16px",
                    height: "16px",
                    accentColor: "#f97316",
                    cursor: "pointer",
                  }}
                />
                Remember Me
              </label>

              <button
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#f97316",
                  padding: 0,
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.color = "#ea580c")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.color = "#f97316")
                }
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                height: "54px",
                borderRadius: "12px",
                backgroundColor: "#f97316",
                color: "#ffffff",
                fontSize: "17px",
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s, transform 0.1s",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = "#ea580c")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = "#f97316")
              }
              onMouseDown={(e) =>
                ((e.target as HTMLButtonElement).style.transform = "scale(0.98)")
              }
              onMouseUp={(e) =>
                ((e.target as HTMLButtonElement).style.transform = "scale(1)")
              }
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
              © 2026 Creative Catalyst. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}