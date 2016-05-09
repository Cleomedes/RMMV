using System;
using System.Windows.Forms;
namespace OpenBrowser
{

          public class WebPage : System.Windows.Forms.Form
          {
 
                    private AxSHDocVw.AxWebBrowser axWebBrowser1;
                    private System.Windows.Forms.Button browseButton;
 
                    public WebPage ()
                    {
                             InitializeComponent();
                    }
 
                    private void InitializeComponent()
                    {
                             System.Resources.ResourceManager resources = new System.Resources.ResourceManager(typeof(WebPage));
                             this.browseButton = new System.Windows.Forms.Button();
                             this.axWebBrowser1 = new AxSHDocVw.AxWebBrowser();
                             ((System.ComponentModel.ISupportInitialize)(this.axWebBrowser1)).BeginInit();
                             this.SuspendLayout();

                             this.browseButton.Location = new System.Drawing.Point(8, 8);
                             this.browseButton.Name = "browseButton";
                             this.browseButton.TabIndex = 1;
                             this.browseButton.Text = "Browse";
                             this.browseButton.Click += new System.EventHandler(this.browseButton_Click);
                             this.axWebBrowser1.Enabled = true;
                             this.axWebBrowser1.Location = new System.Drawing.Point(10, 40);
                             this.axWebBrowser1.OcxState = ((System.Windows.Forms.AxHost.State)(resources.GetObject("axWebBrowser1.OcxState")));
                             this.axWebBrowser1.Size = new System.Drawing.Size(980, 808);
                             this.axWebBrowser1.TabIndex = 6;
                             this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
                             this.ClientSize = new System.Drawing.Size(292, 266);
                             this.Controls.Add(this.browseButton);
                             this.Controls.Add(this.axWebBrowser1);
                             this.Name = "WebPage";
                             this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
                             ((System.ComponentModel.ISupportInitialize)(this.axWebBrowser1)).EndInit();
                             this.ResumeLayout(false);
                    }
 
                    [STAThread]
                    static void Main()
                    {
                             Application.Run(new WebPage ());
                    }
                    private void browseButton_Click(object sender, System.EventArgs e)
                    {
                             axWebBrowser1.Navigate(pathtofile);
                             nullObjStr, ref nullObjStr, ref nullObjStr);
                             }
          }
}
